-- 1. Création de la table des votes (si elle n'existe pas déjà)
create table if not exists game_votes (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  winner_id text not null,
  loser_id text not null,
  winner_name text,
  loser_name text,
  category text not null, -- 'rapper', 'album', 'single'
  theme text default 'general'
);

-- 2. Création de la fonction pour récupérer le classement (RPC)
create or replace function get_leaderboard(category_filter text)
returns table (
  id text,
  name text,
  wins bigint,
  losses bigint,
  total_matches bigint,
  win_rate numeric
) 
language plpgsql
as $$
begin
  return query
  with vote_counts as (
    -- Compter les victoires
    select 
      winner_id as item_id,
      winner_name as item_name,
      count(*) as win_count,
      0 as loss_count
    from game_votes
    where category = category_filter
    group by winner_id, winner_name
    
    union all
    
    -- Compter les défaites
    select 
      loser_id as item_id,
      loser_name as item_name,
      0 as win_count,
      count(*) as loss_count
    from game_votes
    where category = category_filter
    group by loser_id, loser_name
  ),
  aggregated as (
    -- Agréger les résultats par item
    select
      item_id,
      max(item_name) as name, -- On prend un nom au hasard (ils devraient être identiques)
      sum(win_count) as wins,
      sum(loss_count) as losses
    from vote_counts
    group by item_id
  )
  select
    item_id as id,
    aggregated.name,
    aggregated.wins,
    aggregated.losses,
    (aggregated.wins + aggregated.losses) as total_matches,
    case 
      when (aggregated.wins + aggregated.losses) > 0 then
        round((aggregated.wins::numeric / (aggregated.wins + aggregated.losses) * 100), 1)
      else 0
    end as win_rate
  from aggregated
  order by win_rate desc, total_matches desc;
end;
$$;
