import {createClient} from '@supabase/supabase-js'

const supabaseUrl='https://rxlwjcjpxzwsfejtyoql.supabase.co';

const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bHdqY2pweHp3c2ZlanR5b3FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNDUwOTcsImV4cCI6MjA4NTkyMTA5N30.d3hs14-zt6xDuHS0m09FP5ctuy9YPWl5pbboqxzOFoQ';

export const supabase=createClient(supabaseUrl,supabaseKey)
