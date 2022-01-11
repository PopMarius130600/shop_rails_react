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

      get 'basket' => "baskets#show"
      delete 'basket/:id' => "baskets#destroy"

      post 'items/search', to: 'items#search'
      post 'item_lists', to: 'item_lists#create'
      post 'item_lists/:id/add', to:'item_lists#add_quantity'
      post 'item_lists/:id/reduce', to:'item_lists#reduce_quantity'
      delete 'item_lists/:id', to:'item_lists#destroy'

      resources :categorys
      resources :sub_categorys
      resources :items
      resources :orders

    end
  end

  get '*path', to: 'pages#index', via: :all
  root 'pages#index'

end