-- 1. Ajouter la colonne user_id pour lier le vote à l'utilisateur (si elle n'existe pas)
alter table game_votes 
add column if not exists user_id uuid references auth.users(id);

-- 2. Activer la sécurité niveau ligne (RLS)
alter table game_votes enable row level security;

-- 3. Créer une politique pour permettre à TOUT LE MONDE de voir les stats (pour le classement)
create policy "Tout le monde peut voir les votes" 
on game_votes for select 
using (true);

-- 4. Créer une politique pour permettre SEULEMENT aux utilisateurs connectés de voter
create policy "Seuls les connectés peuvent voter" 
on game_votes for insert 
with check (auth.role() = 'authenticated');
