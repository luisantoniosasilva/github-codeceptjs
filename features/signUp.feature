Feature: Sign up GitHub 

    Background: Access Sign up page
        Given I access Sign up page

    Scenario: Successfully access the Sign up page
        Then I see "Welcome to GitHub! Let’s begin the adventure"
    
    Scenario: Register on GitHub
        And I enter my email "emailincorreto@gmail.com"
        And I enter my password "teste123"
        And I enter my username as "incorrect email"
        And I agree to receive information via email
        When I click on "Create account"
        Then I visualize "Welcome to GitHub!"
        # Não vai mudar de página porque pulamos o capcha
        # Para aparecer o botão de create account use a dica abaixo


        # Dica: Tem que remover o atributo  data-disable-invalid="true"
        # <button name="button" type="submit" class="form-control signup-submit-button width-full py-2 js-octocaptcha-form-submit" 
        # data-optimizely-event="click.signup_continue.create_account" data-disable-invalid="true">Create account</button>
        #           ----------------
        # <button name="button" type="submit" class="form-control signup-submit-button width-full py-2 js-octocaptcha-form-submit" 
        # data-optimizely-event="click.signup_continue.create_account" data-disable-invalid="true" disabled="" hidden="hidden">Create account</button>