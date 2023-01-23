# frozen_string_literal: true

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root to: 'root#index'

  get '/greeting', to: 'messages#index'

  namespace :api do
    namespace :v1 do
      resources :messages
    end
  end
end
