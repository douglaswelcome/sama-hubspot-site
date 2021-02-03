var waitId = null;
$(".blog-menu__search-field").on("keyup", function(e) {
	var searchTerm = $(".blog-menu__search-field").val(),
		searchList = $(".blog-menu__search-results-list"),
		portalId = searchList.data("portal");

	if (searchTerm) {
		var temp = Date.now();
		waitId = temp;
		searchList.empty();
		setTimeout(function() {
			if (waitId === temp) {
				// send event with search term to hubspot
				// if ("_hsq" in window) {
				// 	_hsq.push([
				// 		"trackEvent",
				// 		{
				// 			id: "Blog Search: " + searchTerm
				// 		}
				// 	]);
				// }

				var url = "/_hcms/search?portalId=" + portalId + "&type=BLOG_POST&analytics=false&term=" + searchTerm;
				// var url = "/_hcms/search?portalId=" + portalId + "&analytics=true&term=" + searchTerm;
				$.ajax({
					url: url
				}).done(function(data) {
					searchList.empty();

					data.results.forEach(function(item) {
						if (item.type === "BLOG_POST") {
							var author = "<br><small>by: " + item.authorFullName + "</small>";
						} else {
							var author = "";
						}

						var analyticsUrl = _hsq.push(["handleLink", item.url, null, true]);
						var html =
							'<div class="' +
							item.type.toLowerCase() +
							' search__item"><b><a href=' +
							item.url +
							">" +
							item.title +
							"</a></b>" +
							//author +
							"</div>";

						searchList.append(html);
					});

					if (data.results == 0) {
						var html =
							'<div class="search__item">No results for <b class="hs-search-highlight">' +
							searchTerm +
							"</b></div>";
						searchList.append(html);
					}
					// Send Event To Hubspot
					if ("_hsq" in window) {
						_hsq.push(["handleSearchLinks"]);
					}
				});
			}
		}, 200);
	} else {
		$(".search__results--list").empty();
	}
});
$('input[type="search"].blog-menu__search-field').on("click", function(){
    	$('.blog-menu__search-results-list .search__item').remove()
})