<script>
    
    
    let data=null;
    const note=(e)=>{
         if(data==null){return;}
         else{
            names.push(data);
            localStorage.setItem('array', JSON.stringify(names));
            location.reload();
         }
    }
  
       let names =[ ];
    
    let notes= localStorage.getItem('array');
    
    if(notes==null){
        let notesobj=[ ];
        console.log(typeof(notesobj));
        console.log(notesobj);
        names=notesobj;
    }
    else{
        let notesobj=JSON.parse(notes)
        console.log(typeof(notesobj));
        console.log(notesobj);
        names=notesobj;
    }
    
    const check=(index)=>{
        console.log(index)
        names.splice(index,1);
        localStorage.setItem('array', JSON.stringify(names));
        location.reload();
    }

     

</script>
<div id="teacher">
    <div id="divi">

        <input bind:value={data} id="inp" class="shadow appearance-none border border-red-500 rounded w-1/2 mt-3  py-2 px-3 text-gray-700 mb-3 m-auto leading-tight focus:outline-none focus:shadow-outline" type="text">
        <button on:click={note} id="add" class="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded" >Add Note</button>
    </div>
      
    <div id="divi">
        
           

            {#each names as name, index}
            <li>{index+1} - {name}</li>
            <button class="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded" on:click={()=>{check(index)}} >delete</button>
            {/each}
        
    </div>
      
</div>
<style>
    #teacher{
        height: 85vh;
        text-align: center;
        align-items: center;
    }
    #add{
        display: block;
        margin: auto;
    }
    #inp{
        text-align: center;
        font-size: 1.3rem;
        overflow: none;

    }
    #divi{
        align-items: center;
        text-align: center;
        overflow: none;
        
    }
    #divi li{
        list-style: none;
    }
   
</style>