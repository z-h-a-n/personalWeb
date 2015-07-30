# source 'https://rubygems.org'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry'

get '/' do
	@page = 'home'
	erb :index
end