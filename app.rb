require 'sinatra'

get '/' do
	erb :home
end

get '/projects' do
	erb :projects
end

get '/about' do
	erb :about
end