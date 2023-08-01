import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/dist/client/components/headers'
import AuthButon from './auth-button';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: tweets } = await supabase.from("tweets").
select();


  return (
    <>
    <AuthButon/>
    <pre>{JSON.stringify(tweets, null, 2)}</pre>
    </>
  )
}
