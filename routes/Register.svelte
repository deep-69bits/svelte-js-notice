<script>
    
    
  let name=null;
  let password=null;
  let email=null;
  let dis=false;
   const login=()=>{
    navigator('#/teacher')
   }
</script>
<div class="min-h-screen flex items-center justify-center ">

    <!-- login form -->
    <div class="bg-white p-16 rounded shadow-2xl w-2/3">
  
      <h2 class="text-3xl font-bold mb-10 text-gray-800">Login with your teacher id</h2>
  
      <form class="space-y-5">
  
        <div>
          <label class="block mb-1 font-bold text-gray-500">Name</label>
          <input bind:value={name} type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
        </div>
  
        <div>
          <label class="block mb-1 font-bold text-gray-500">Email</label>
          <input bind:value={email}  type="email" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
        </div>
  
        <div>
          <label class="block mb-1 font-bold text-gray-500">Password</label>
          <input  bind:value={password} type="password" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
        </div>
  
       
        {#if name === "teacher" && password==="1234" && email==="teacher@gmail.com"}
           
           <button  on:click={login} class="block w-full bg-yellow-400 hover:bg-orange-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300"><a href="#/teacher">login</a> </button>
        {/if}

        
      </form>
  
    </div>
  
  </div>