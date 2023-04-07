import Banner from '@components/global/Banner';
import EmailComponent from '@components/Contact/EmailComponent';
import MapRendered from '@components/Index/MapRendered';

const ContactLayout = () => {
  return (
    <>
      <Banner title={'Contact'} />

      <div className="py-5 px-4 font-custom2 text-main-orange lg:py-10 lg:px-2">
        <div className="container mx-auto grid grid-cols-12 gap-5">
          <div className="col-span-12 space-y-4 sm:space-y-6 lg:col-span-9">
            <div className="text-xl font-extrabold sm:text-2xl">
              Leave a Message
              <hr className=" my-2 h-px border-0 bg-main-orange lg:my-4"></hr>
            </div>

            <div>
              <p className="text:lg font-extrabold sm:text-xl">
                Get in touch with us!
              </p>
            </div>

            <div>
              <EmailComponent />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="text-2xl font-extrabold">Company Info</div>

            <hr className="my-4 h-px border-0 bg-main-orange "></hr>

            <div className="flex flex-col whitespace-pre-line border border-main-orange py-4 px-2 text-sm lg:flex-wrap">
              <p className="mb-6 w-full whitespace-pre-line font-bold">
                If you are in the middle of something and you don’t want to miss
                that important call.
              </p>
              <div className="space-y-6 font-bold">
                <p className="flex lg:flex-col">
                  Email:{' '}
                  <a
                    href="mailto:contact@twisteddreamshaunt.com"
                    className="ml-4 break-all text-xs text-main-red "
                  >
                    contact@twisteddreamshaunt.com
                  </a>
                </p>
                <p className="flex lg:flex-col">
                  Phone:{' '}
                  <a
                    href="tel:+1 (888) 888 - 8888"
                    className="ml-4 text-main-red"
                  >
                    +1 (888) 888 - 8888
                  </a>
                </p>
                <p className="flex lg:flex-col">
                  Fax:{' '}
                  <a
                    href="tel:+1 (888) 888 - 8888"
                    className="ml-4 text-main-red"
                  >
                    +1 (888) 888 - 8888
                  </a>
                </p>
                <p className="flex lg:flex-col">
                  website:{' '}
                  <a
                    href="https://twisteddreamshaunt.com"
                    className="ml-4 text-main-red"
                  >
                    Twisteddreamshaunt.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MapRendered />
    </>
  );
};

export default ContactLayout;
