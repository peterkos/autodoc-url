


doTheThing();

function doTheThing() {

    let curURLParts = document.URL.split("/");

    // Don't infinitely loop
    if (curURLParts[4] == "latest") {
        return;
    }

    // Replace the version number with "latest"
    curURLParts[4] = "latest";

    // Patch it up and save
    let fixedURL = curURLParts.join('/');

    document.location = fixedURL;

}
