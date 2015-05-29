// https://api.spotify.com/v1/search?q=SOMETHINGHERE&type=SOMETHINGHERE
$(document).ready(function() {
  
  var searchKeyword = $('#search-keyword')
  var submit = $('#submit')
  var searchType = $('#search-type')
  var results = $('#results');


  // event listener for submit button
  submit.on('click', function(e) {  
     search = searchKeyword.val()
     return search
     console.log(search);
   });

   // event listener for drop down menu
    searchType.on('change', function(e) {
      choice = searchType.val()
      return choice

    });

function getSearchResults(e) {
    $.ajax({
      type: 'GET',
      url: '// https://api.spotify.com/v1/search?q="search-keyword"&type="search-type"'
    }) 
    .done(function(response) {
      searchKeyword.empty();
      console.log(this);

      var keywords = [];


      $.each(response, function(index, item) {
        if($.inArray(item.keyword, keywords) === -1 && item.keyword.length >= 1) {
          keywords.push(item.keyword);
          keywords.append('results')
        }
      })
      keywords.prepend('results')
    });
  }

function getDropDown(e) {
    $.ajax({
      type: 'GET',
      url: '// https://api.spotify.com/v1/search?q="search-keyword"&type="search-type"'
    }) 
    .done(function(response) {
      searchType.empty();
      console.log(this);

      searchType = [];


      $.each(response, function(index, item) {
        if($.inArray(item.searchType, searchType) === -1 && item.searchType.length >= 1) {
          searchType.push(item.searchType);
          searchType.append('results')
        }
      })
      searchType.prepend('results')
    });
  }
});


  