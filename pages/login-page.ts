import { Page, expect} from '@playwright/test';

export class LoginPage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async go(){
        await this.page.goto('https://login-app-qacademy.vercel.app');
        const title = this.page.locator('.App-header p');
        await expect(title).toHaveText('Login');
    }

    async sigIn(user: string, password: string) {
        await this.page.fill('input[placeholder$=usuário]', 'qa')
        await this.page.fill('input[placeholder^=senha]', 'cademy')
        await this.page.click('button >> text=Entrar')
    }

    async userLoggedIn() {
        const modalMessage = this.page.locator('.swal2-html-container')
        await expect(modalMessage).toHaveText('Sua credenciais são validas :)')
    }

}