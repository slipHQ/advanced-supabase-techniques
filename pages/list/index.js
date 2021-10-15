import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";
import Auth from "../../components/Auth";
import ListEquipment from "../../components/ListEquipment";

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className='container' style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth />
      ) : (
        <ListEquipment key={session.user.id} session={session} />
      )}
    </div>
  );
}
