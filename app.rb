require 'bundler/setup'
require 'sinatra'
require 'json'

get '/' do
  redirect to('/index.html')
end

get '/list' do
  [
    {
      id: 1,
      image_url: 'http://お祝い祭り/image/1.gif',
      title: '瀬川くん障害対応お疲れ様'
    },
    {
      id: 2,
      image_url: 'http://お祝い祭り/image/2.gif',
      title: 'ほげほげ'
    },
  ].to_json
end
