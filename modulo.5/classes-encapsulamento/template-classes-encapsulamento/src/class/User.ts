export class User{
    constructor(private id: Date, private email: string, private password: string) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public getEMail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setEmail(newEmail: string): void {
        this.email = newEmail;
    }

    public setPassword(newPassword: string) {
        this.password = newPassword
    }
}