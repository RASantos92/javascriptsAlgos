public class test{

public static void main(String[] args){
HttpRequest request = HttpRequest.newBuilder()
		.uri(URI.create("https://worldwide-restaurants.p.rapidapi.com/typeahead"))
		.header("content-type", "application/x-www-form-urlencoded")
		.header("x-rapidapi-host", "worldwide-restaurants.p.rapidapi.com")
		.header("x-rapidapi-key", "5fe07733ccmshd945cff04bc0fc1p17043fjsn4e1ebed8b1f7")
		.method("POST", HttpRequest.BodyPublishers.ofString("q=rochester&language=en_US"))
		.build();
HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());
}
}