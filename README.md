# Keboola papers

[COGVIO](http://blog.keboola.com/)


## Docker run
[more info](https://github.com/envygeeks/jekyll-docker)

#### Local Usage

```sh
export JEKYLL_VERSION=3.5
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  -it -p 4000:4004 jekyll/jekyll:$JEKYLL_VERSION \
  jekyll server
```

#### Local Compile less

```sh
docker run --rm -v `pwd`:/app -ti appleboy/node-less \
	--plugin=less-plugin-clean-css \
	less/style.less > css/style.css
```

#### IP
```
http://127.0.0.1:4000/
```


## Netlify

### Build command
```jekyll build```


### Test url


