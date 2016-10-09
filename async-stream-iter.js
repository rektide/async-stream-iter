function *asyncStreamIter( reader){
	var done, value
	while( true){
		if( done){
			yield value
			return
		}
		var cursor = reader.read()
		cursor.then(function( next){
			if( next.done){
				done= next.done
				value= next.value
			}
		})
		yield cursor
	}
}

module.exports = asyncStreamIter
