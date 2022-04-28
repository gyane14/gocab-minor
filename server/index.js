const { createClient } = require('@supabase/supabase-js')
const supabase = createClient("https://gpzjfpxijvsmpcnkylse.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwempmcHhpanZzbXBjbmt5bHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYwMzUyOTEsImV4cCI6MTk2MTYxMTI5MX0.kggo60IGe1b7bsQKvmjXJAawuEE9AQf6NmCAAZpaUes")

const main = async () => {
  let {data, error } = await supabase
  .from('stdinfo')
  // .insert({reg_no: 155606090, name: 'Red Green', email:'red@green.xxx'})
  .select("*")
//   .eq("name", "John Doe")
// CRUD - Create, Read, Update, Delete
  
  if (error){
    console.log(error)
    return
  }

//   console.log(data);

  for(var i of data){
    console.log(i.name);
  }

//   here we will  go with a loop which will show details of registered members on the admin channel
}

main()