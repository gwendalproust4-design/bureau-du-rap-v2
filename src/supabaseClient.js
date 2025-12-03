import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

// If env vars are provided, create a real client.
// Otherwise export a safe mock with the minimal API the app expects
// so the UI can still render (useful for local previews without secrets).
let supabase;
if (SUPABASE_URL && SUPABASE_KEY) {
	supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
} else {
	console.warn('VITE_SUPABASE_URL or VITE_SUPABASE_KEY is missing — using a safe mock for supabase client. Provide env vars to enable full backend features.');

	const noopPromise = async (value = { data: null, error: null }) => value;

	// Mock builder that supports chaining and is thenable
	const createMockBuilder = (defaultData = []) => {
		const builder = {
			select: () => builder,
			insert: () => Promise.resolve({ data: null, error: null }),
			update: () => Promise.resolve({ data: null, error: null }),
			delete: () => Promise.resolve({ data: null, error: null }),
			eq: () => builder,
			in: () => builder,
			ilike: () => builder,
			single: () => Promise.resolve({ data: null, error: null }),
			maybeSingle: () => Promise.resolve({ data: null, error: null }),
			// Make it thenable so it can be awaited
			then: (resolve) => resolve({ data: defaultData, error: null })
		};
		return builder;
	};

	supabase = {
		auth: {
			getSession: async () => ({ data: { session: null } }),
			onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
			signInWithPassword: async () => ({ error: { message: 'Supabase keys missing in .env' } }),
			signUp: async () => ({ data: null, error: { message: 'Supabase keys missing in .env' } }),
			signOut: async () => ({ data: null }),
		},
		from: (/* table */) => createMockBuilder(),
	};
}

export { supabase };