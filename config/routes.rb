Rails.application.routes.draw do
  get 'patients/index'
  get 'patients/create'
  get 'patients/update'
  get 'patients/destroy'
  devise_for :users, controllers: { registrations: 'registrations'}
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
