class GitHub{
    constructor(){
        this.client_id ='86d16fa430a98d36b3b7';
        this.client_secret ='a2c1eec5869485019389388306eb7b7bba06d614';
        this.repos_count =5;
        this.repos_sort = 'created: asc';
    }


    async getUser (user){
        const profileResponse = 
        await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = 
        await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort${this.repos_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile : profile,
            repos :repos
        }
    }
}