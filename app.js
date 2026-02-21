const condition = true;

console.log('Imasha Dulshini');

const myPromise = new Promise((resolve, reject) => {
  if (condition) resolve('Success!');
  else reject('Failure!');
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();