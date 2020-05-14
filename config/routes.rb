# frozen_string_literal: true

Rails.application.routes.draw do
  get 'bills/index'
  get 'bills/show'
  get 'samples/index'
  get 'samples/create'
  get 'samples/show'
  devise_for :users, controllers: { registrations: 'registrations' }
  root 'home#index'

  namespace :api, defaults: { format: 'json' } do
    resources :patients
    resources :tests
    resources :samples
    resources :bills
  end

  get '*a', to: 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
