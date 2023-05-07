import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Counter from '~/components/starter/counter/counter';
import Hero from '~/components/starter/hero/hero';
import Infobox from '~/components/starter/infobox/infobox';
import Starter from '~/components/starter/next-steps/next-steps';
// import * as configcat from 'configcat-js';
import * as configcat from 'configcat-js-ssr';
export default component$(() => {
  console.log('render')
  let resp = false;
  const configCatClient = configcat.getClient("YOUR-SDK-KEY");
console.log("CEAU")
  configCatClient.getValueAsync("canShowUpdatedButtonText", false)
  .then(value => {
    resp = value;
    console.log("canShowUpdatedButtonText: " + value);
  });

  return (
    <>
    <div>
      Hi there everyone!
      <h3>
        {resp.toString()}
      </h3>
    </div>
    </>
  )
});
 