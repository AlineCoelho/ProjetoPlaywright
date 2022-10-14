import { test } from '@playwright/test';

import{ LoginPage } from '../pages/login-page'

let loginPage: LoginPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
})

test('deve logar com sucesso', async({ page }) =>{
        //página de login
    await loginPage.go()
    //submeter o formulário de login
    await loginPage.sigIn('qa', 'cademy')
    //validar o login no modal
    await loginPage.userLoggedIn()
 
});
