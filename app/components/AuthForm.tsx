/*'use client';
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const supabase = createClient();

export default function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState<string | null >(null);
    const [loading, setLoading] = useState(false);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        const {error} = isLogin
        ? await supabase.auth.signInWithPassword ({email, password})
        : await supabase.auth.signUp({ email, password});

        if(error) {
          setError(error.message);
        }

        setLoading(false);
    };
  return (
    <form className="space-y-4 max-w-sm mx-auto" onSubmit={handleAuth}>
      <h2 className="text-xl font-bold">{isLogin ? 'Login' : 'Register'}</h2>
        <Input 
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full px-4 py-2 border rounded"
        />
        <Input 
          type="password"
          placeholder="Passeord"
          value={password} 
          required
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full px-4 py-2 border rounded"
        />
        <Button 
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          {loading ? 'Loading...' : isLogin ? 'Login' : 'Register'}
          </Button>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
           type="submit"
           onClick={() => setIsLogin(!isLogin)}
           className="text-sm bg-white text-blue-600 hover:underline mt-2 hover:bg-gray-100"
          >
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
          </Button>
    </form>
  );
}*/
