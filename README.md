# GitHub Profiles Finder

GitHub Profiles Finder is mini-app that uses the GitHub API to find profiles and the  appropriate repositories for each profile using Fetch and ES7 syntax Async/Await

## Installation

For the UI we need [Bootstrap V4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) 
and [Bootstrapwatch V4](https://bootswatch.com/)

And also for more thant 100 request from the GitHub api its recomended to regester for a key 

## Usage

Just an example you need to use your proper Id's for the API

```Javascript
client_id ='86d16fa430a98d36b3b5572'
client_secret ='a2c1eec5869485015529389388306eb7b7bba06d614'

const profileResponse = 
        await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
