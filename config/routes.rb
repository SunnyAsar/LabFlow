Rails.application.routes.draw do

  devise_for :users, controllers: { registrations: 'registrations'}
  root 'home#index'

  namespace :api, defaults: { format: 'json'} do
    resources :patients
  end

  get '*a', to: 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
