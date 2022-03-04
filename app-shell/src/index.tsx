import 'piral/polyfills';
import { renderInstance, SetRoute } from 'piral';
import { layout } from './layout';
import { createBlazorApi } from 'piral-blazor';
import { errors } from './errors';
import homePage from './pages/homePage';
import aboutPage from './pages/aboutPage';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/empty';

renderInstance({
  layout,
  errors,
  plugins: [ 
    createBlazorApi(),
  ],
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
  piralChildren: (
    <>
      <SetRoute path="/" component={homePage} />
      <SetRoute path="/about" component={aboutPage} />
    </>
  ),
});
