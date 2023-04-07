import classNames from 'classnames';
import { useState } from 'react';

export default function EmailComponent() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    status: '',
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) {
      setForm({
        ...form,
        status: 'Please fill out all fields',
      });
    } else {
      setForm({
        ...form,
        status: 'Sending...',
      });
      await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      }).then((res) => {
        if (res.status === 200) {
          setForm({
            ...form,
            name: '',
            email: '',
            subject: '',
            message: '',
            status: 'Message Sent Successfully',
          });
        } else {
          setForm({
            ...form,
            status: 'Message failed to send',
          });
        }
      });
    }
  };

  // todo - how does fetch work?

  function RequiredMessage() {
    return <p className="my-2 text-main-red">This Field is Required.</p>;
  }

  return (
    <form action="">
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12 flex flex-col space-y-8 lg:col-span-5">
          <div className="font-bold text-main-red">
            <label htmlFor="name" className="block text-main-orange">
              Name
            </label>
            <div className="mt-2">
              <input
                required
                placeholder="Enter your name"
                value={form.name}
                onChange={handleForm}
                type="text"
                name="name"
                id="name"
                className="block h-[50px] w-full rounded-sm border-main-orange p-4 placeholder-main-red shadow-sm focus:border-main-orange focus:ring-main-orange"
              />
            </div>
            {!form.name &&
              form.status != 'Message Sent Successfully' &&
              form.status != '' && <RequiredMessage />}
          </div>

          <div className="font-bold text-main-red">
            <label
              htmlFor="email"
              className="block  font-semibold text-main-orange"
            >
              Email
            </label>
            <div className="mt-2 text-main-red">
              <input
                placeholder="Enter your email"
                value={form.email}
                onChange={handleForm}
                type="email"
                name="email"
                id="email"
                className="block h-[50px] w-full rounded-sm border-main-orange p-4 placeholder-main-red shadow-sm focus:border-main-orange focus:ring-main-orange"
              />
              {!form.email &&
                form.status != 'Message Sent Successfully' &&
                form.status != '' && <RequiredMessage />}
            </div>
          </div>

          <div className="font-bold text-main-red">
            <label htmlFor="subject" className="block text-main-orange">
              Subject
            </label>
            <div className="mt-2">
              <input
                placeholder="Enter a subject"
                value={form.subject}
                onChange={handleForm}
                type="text"
                name="subject"
                id="subject"
                className="block h-[50px] w-full rounded-sm  border-main-orange p-4 placeholder-main-red shadow-sm focus:border-main-orange focus:ring-main-orange"
              />
              {!form.subject &&
                form.status != 'Message Sent Successfully' &&
                form.status != '' && <RequiredMessage />}
            </div>
          </div>
        </div>

        <div className="col-span-12 text-lg font-bold text-main-red lg:col-span-7">
          <label htmlFor="message" className="block text-main-orange">
            Message
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={10}
              placeholder="Enter your message"
              value={form.message}
              onChange={handleForm}
              className="block h-[278px] w-full rounded-sm border-main-orange p-4 placeholder-main-red shadow-sm focus:border-main-orange focus:ring-main-orange"
            />
            {!form.message &&
              form.status != 'Message Sent Successfully' &&
              form.status != '' && <RequiredMessage />}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-5 rounded-sm bg-main-red py-3 px-5 text-lg font-bold text-white"
        >
          Send Message
        </button>
      </div>
      {form.status && (
        <p
          className={classNames(' my-6 border p-2', {
            'border-main-red text-main-red':
              form.status === 'Message failed to send',
            'border-green-800 text-green-800':
              form.status === 'Message Sent Successfully',
            'border-main-red  text-main-red':
              form.status === 'Please fill out all fields',
            'border-yellow-800 text-yellow-800': form.status === 'Sending...',
          })}
        >
          {form.status}
        </p>
      )}
    </form>
  );
}
