require 'bundler/setup'
require 'sinatra'
require 'json'

get '/' do
  redirect to('/index.html')
end

get '/list' do
  content_type 'application/json'
  oiwais = [
    {
      id: 1,
      image_url: 'http://www.shogi.or.jp/player/ph_kishi/segawa.jpg',
      title: '瀬川くん障害対応お疲れ様',
      omedetou_count: 10
    },
    {
      id: 2,
      image_url: 'http://aya-web.com/img/ayakasegawa.jpg',
      title: 'ほげほげ',
      omedetou_count: 100
    },
  ]
  oiwais.to_json
end

post '/omedeto/:id' do
  content_type 'application/json'
  {count: 100 + params[:id].to_i}.to_json
end
