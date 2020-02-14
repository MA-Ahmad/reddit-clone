Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html  
  devise_for :accounts
  get 'u/:username', to: 'public#profile', as: :profile

  resources :communities do
    resources :posts
  end

  resources :subscriptions, only: :create
  resources :comments, only: :create

  post '/post/vote', to: 'votes#create'
  
  root to: "public#index"
end
