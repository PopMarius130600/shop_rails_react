Rails.application.routes.draw do
  get 'pages/index'
  scope :api do
    scope :v1 do

      devise_for :users, path: '', path_names: {
        sign_in: 'login',
        sign_out: 'logout',
        registration: 'signup'
      },
      controllers: {
        sessions: 'users/sessions',
        registrations: 'users/registrations'
      }
      post 'items/search', to: 'items#search'

      resources :categorys
      resources :sub_categorys
      resources :items

    end
  end

  get '*path', to: 'pages#index', via: :all
  root 'pages#index'

end