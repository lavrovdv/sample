# this HTTP server logs its actions to stdout
require 'webrick'
include WEBrick
# add mime types for fonts
mime_types = WEBrick::HTTPUtils::DefaultMimeTypes
mime_types.store 'woff', 'application/octet-stream'
mime_types.store 'ttf', 'application/x-font-ttf'
# Create server
server = HTTPServer.new(
  :Port            => 4000,
  :DocumentRoot    => "./"
)
# When the server gets a control-C, kill it
trap("INT"){ server.shutdown }
# Start the server
server.start