const log = console.log;

const curry =
	(f) =>
	(a, ..._) =>
		_.length ? f(a, ..._) : (..._) => f(a, ..._);
const map = curry((f, iter) => {
	let res = [];
	for (const a of iter) {
		res.push(f(a));
	}
	return res;
});

const filter = curry((f, iter) => {
	let res = [];
	for (const a of iter) {
		if (f(a)) res.push(a);
	}
	return res;
});

const reduce = curry((f, acc, iter) => {
	// acc를 사용자가 넘기지 않았을 때의 처리
	if (!iter) {
		iter = acc[Symbol.iterator]();
		acc = iter.next().value;
	}

	for (const a of iter) {
		acc = f(acc, a);
	}
	return acc;
});
