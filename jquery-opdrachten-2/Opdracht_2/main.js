// Write your solution here
// Met een dubbelklik, 
// verander de breedte van de afbeelding naar 500px;

const handleDblclickImage = (e) => {
    $("#image").width("500px")
}
$("#image").dblclick(handleDblclickImage)