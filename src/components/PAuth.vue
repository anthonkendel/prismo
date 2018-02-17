<script>
import { authService } from '@/services';
import { mapMutations } from 'vuex';

const SECOND = 1000;
let backgroundInterval = null;

export default {
  name: 'PAuth',
  async mounted() {
    const INTERVAL = 20 * SECOND;
    backgroundInterval = setInterval(this.validateAccessTokenInBackground, INTERVAL);
    const authenticated = await authService.validateAccessToken(authService.getAccessToken());
    this.setAuthenticated(authenticated);
  },
  beforeDestroy() {
    if (backgroundInterval) {
      clearInterval(backgroundInterval);
    }
  },
  methods: {
    ...mapMutations({
      setAuthenticated: 'setAuthenticated',
    }),
    async validateAccessTokenInBackground() {
      const authenticated = await authService.validateAccessToken(authService.getAccessToken());
      this.setAuthenticated(authenticated);
    },
  },
  template: '<div></div>',
};
</script>
