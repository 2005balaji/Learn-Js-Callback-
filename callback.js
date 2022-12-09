const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

function getCookies() {
  console.log('de');
  setTimeout(() => {
    // cookies.push((cookie) => {
    console.log('Hi');
    // });
  }, 1000);
}
function createCookie(newCookie, callback) {
  setTimeout(() => {
    cookies.push(newCookie);
    callback();
  }, 2000);
}

// Progression 5: calling function
createCookie(newCookie, getCookies);
getCookies();
