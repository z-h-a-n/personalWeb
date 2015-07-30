require 'sinatra'

get '/' do
	@page = 'home'
	erb :index
end