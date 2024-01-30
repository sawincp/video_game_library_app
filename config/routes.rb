Rails.application.routes.draw do

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  resources :games

  resources :consoles do
    resources :games, only:[:index]
  end

  resources :genres do
    resources :games, only:[:index]
  end

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

# Rails.application.routes.draw do
#   post "/signup", to: "users#create"
#   get "/me", to: "users#show"
#   post "/login", to: "sessions#create"
#   delete "/logout", to: "sessions#destroy"

#   resources :games do
#     resources :consoles, only: [:index] do
#       member do
#         get 'games', to: 'consoles#games'
#       end
#     end

#     resources :genres, only: [:index] do
#       member do
#         get 'games', to: 'genres#games'
#       end
#     end
#   end

#   resources :consoles
#   resources :genres

#   # Routing logic: fallback requests for React Router.
#   # Leave this here to help deploy your app later!
#   get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
# end