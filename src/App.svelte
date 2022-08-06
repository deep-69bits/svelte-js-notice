<script>
	import axios from "axios";
	import { onMount } from "svelte";
	import Router from 'svelte-spa-router'
import Home from "../routes/Home.svelte";
import Register from "../routes/Register.svelte";
import Teacher from "../routes/teacher.svelte";
	let username, password;
    
	 const data ={
				username: "john1904",
				password: "spiderman",
			}


	async function getData() {
		axios
			.post("http://localhost:3000/user", data)
			.then(function (response) {
				console.log(data);
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	const routes = {
    '/': Home,
	'/register':Register,
	'/teacher': Teacher
}
    

</script>
<main>

<nav class="flex items-center justify-between flex-wrap bg-orange-500 p-6">
	<div class="flex items-center flex-shrink-0 text-white mr-6">
	  <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
	  <span class="font-semibold text-xl tracking-tight">DNotice</span>
	</div>

	<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
	  <div class="text-sm lg:flex-grow">
		<a href="#/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
		  Home
		</a>
		<a href="#/register" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
		  Teacher
		</a>
		<a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
		  Student
		</a>
	  </div>
	  <div>
        
	  </div>
	</div>
  </nav>
	
  <Router {routes}/>

  <footer>
	<p>deepdev</p>
	<br>
	<p>deepakchattwaniking15@gmail.com</p>
  </footer>

</main>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	main {

		max-width: 240px;
	}

	/* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	footer {
  background-color: rgb(255, 115, 0);
   display: block;
   bottom: 0px;
   margin-bottom: 0;
   color: white;
   text-align: center;
   
  padding: 1em;
}
	/* button {
		border: none;
		margin: 50px;
		width: 15%;
		height: 5vh;
		font-size: large;
		background-color: #ff3e00;
		color: white;
	}
	button:hover {
		border: none;
		margin: 50px;
		width: 15%;
		height: 5vh;
		font-size: large;
		background-color: rgb(255, 255, 255);
		color: #ff3e00;
	} */
		/* #navbar{
			margin: 0px;
			padding: 0px;
			display: block;
			background-color:#ff3e00; 
			height: 5vh;
			text-decoration: none;
			list-style: none;
			
		}
		#navbar ul{
			list-style: none;
			display: flex;
			justify-content: space-between;
			text-decoration: none;
			margin: auto;
		}
		#navbar ul li{
			text-decoration: none;
			text-align: center;
			align-items: center;
			font-size: 1.3rem;
			color: white;
			cursor: pointer;
			margin: 10px;
		}
		#navbar ul li:hover{
			text-decoration: none;
			text-align: center;
			align-items: center;
			font-size: 1.3rem;
			color: rgb(245, 248, 50);
			cursor: pointer;
			margin: 10px;
		} */
</style>

