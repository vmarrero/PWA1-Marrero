/**
 * Name: Vanessa Marrero
 * Assignment: "Week #2 :: { Homework } - DEBUG Search Engine (v2)"
 * Date: 7/18/2014
 
 **/

// self-executing function for search engine and results reporting to user.
// Create privatized scope using a self-executing function
(function(){
	
    //variables to where on the page the results will display, the search field box, and the user's current search term - which is yet to be defined.
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
    
    console.log(resultsDIV);
    console.log(searchInput);
    console.log(currentSearch);
    
    //this function validates the user's search term by making sure it has been inputted in the first place, is not an empty space, and is not less than 3 characters.
    // Validates search query
	var validate = function(query){
		// Trim whitespace from start and end of search query
        //while the character(s) at the beginning of the user's search term is(are) empty space(s), declare the user's search term from the next index to the index where the search term's ends.
		while(query.charAt(0) === " "){
			query = query.substring(1, query.length);
		};
        //while the character(s) at the ending of the user's search term is(are) empty space(s), declare the user's search term from the beginning index of the term to the 1 less of index where the search term's ends.
		while(query.charAt(query.length-1) === " "){
			query = query.substring(0, query.length-1);
        };
        //if the user's search term is less than 3 characters, alert the user that the query is too small.
		// Check search length, must have 3 characters
		if(query.length < 3){
			alert("Your search query is too small, try again.");

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
            //when the search field box is selected by the user
			searchInput.focus();
            //return out of the function and do not continue to search for the query
			return;  
		};          
    
    //this function     
	// Finds search matches
	var search = function(query){
		
        //this splits the user's search term into an array, just in case of multiple words.
		// split the user's search query string into an array
		var queryArray = query.split(" ");
        console.log(queryArray);
		
        //this creates a new array which will store any results from the database.js file that match the user's term(s)
		// array to store matched results from database.js
		var results = [];
        console.log(results);
        
        //the possible results of any search term are stored in the database.js array named db
        //this loops through each index of the db array
		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){
		
			// each db[i] is a single video item, each title ends with a pipe "|", this declares where the title ends
			var dbTitleEnd = db[i].indexOf('|');
            //this saves a variable of the video title in lowercase
			var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);
			console.log(db[i]);
            console.log(dbitem);
			//this loops through the user's search query words
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
                //this saves a variable of the search keyword(s) in lowercase
				var qitem = queryArray[ii].toLowerCase();
				console.log(qitem);
				//this searches the video title for the keyword(s)
				var compare = dbitem.indexOf(qitem);
                console.log(compare);
				// If a match is found, this conditional will run. -1 will return if no match is found
				if(compare !== -1){
                    //this inserts the full db[i] (video title and url) into the results array
					results.push(db[i]);
                    console.log(results);
				};
            };
        };
		
        //this sort function sorts letters in alphabetic and ascending order regardless of letter capitalization by converting all the letters into lowercase form - for the purposes of the sort.
        var ignoreCase = function (a, b){
            var x = a.toLowerCase(), y = b.toLowerCase();
            return (x < y) ? -1 : (x > y) ? 1 : 0;                    
        };
        //this sorts the results array items according to the sort function 
		results.sort(ignoreCase);
        console.log(results);
		
    //this function defines the results to display if no results are found that match the user's search term(s)    
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
        var noMatch = function(){
        //this is the text that will display for no results.
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
        //this changes the text of the results div to display the no results message.
		resultsDIV.innerHTML = html;
        //this returns this variable out of the function
        return html;
        console.log(html);
	};
	
    //this function defines how results will be displayed if any match are found to the user's search term(s)
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
        //this is declaring variables, which are yet to be defined, for the search results
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
        //this loops through the results array(which has values that were pushed there after a match was found to the user's search term)
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		console.log(results[i]);
			//the end of the video title ends with pipe
			var titleEnd = results[i].indexOf('|');
            //this pulls the title of the video using indexes and stores it
			title = results[i].substring(0, titleEnd);
			console.log(title);
			//this pulls the video url after the title using references to indexes and stores it
			url = results[i].substring(titleEnd+1, results[i].length);
            console.log(url)
			
            //this constructs how the result will be displayed - the video title will be made a link using the url value.
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
        //this changes the text of the results div to display the results.
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
        
		//this conditional checks the results and runs the appropriate function
		if(results.length === 0){
            //if there are no results in the array, then run the noMatch function
			noMatch();
		}else
            //if there are results in the array, then run the showMatches function
			showMatches(results);
		};
	};        

        //run the Search function
		search(query);
	


    
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
    //where the user submits their search term(s), run this function
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validate(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
    };     
    
})(); 