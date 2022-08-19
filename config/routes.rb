Rails.application.routes.draw do
  root to: 'lists#index'
  resources :lists, except: %i[destroy edit update] do
    resources :bookmarks, only: %i[new create]
  end
  resources :lists, only: :destroy
  resources :bookmarks, :destroy
end
