import mixpanel from 'mixpanel-browser';
mixpanel.init('0191635383cbe1f252f54590c871d2d8', {
  debug: true,
  ignore_dnt: true
});

// const env_check = process.env.NODE_ENV === 'production';
export interface Dict {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const actions = {
  identify: (id: string) => {
    mixpanel.identify(id);
  },
  alias: (id: string) => {
    mixpanel.alias(id);
  },
  track: (name: string, props?: Dict) => {
    mixpanel.track(name, props);
  },
  people: {
    set: (props: Dict) => {
      mixpanel.people.set(props);
    },
  },
};

export const Mixpanel = actions;