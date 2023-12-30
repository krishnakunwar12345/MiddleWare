class notAdminError extends Error{
    constructor(message){
        super(message);
        this.name="Not a admin Exception";
    }
}
