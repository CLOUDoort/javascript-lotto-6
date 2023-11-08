import LOTTO_CONSTANT from '../constants/lotto.js';
import Lotto from '../Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Counter {
  #lottoTicketNumber;

  constructor(inputAmount) {
    this.#calculateLottoTicketNumber(inputAmount);
  }

  #calculateLottoTicketNumber(inputAmount) {
    this.#lottoTicketNumber = inputAmount / LOTTO_CONSTANT.price;
  }

  #generateLotto() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(LOTTO_CONSTANT.min, LOTTO_CONSTANT.max, LOTTO_CONSTANT.count);
    lottoNumbers.sort((a, b) => a - b);

    return lottoNumbers;
  }

  giveLotto() {
    const lottoBox = [];
    Array.from({ length: this.#lottoTicketNumber }, () => {
      const lotto = this.#generateLotto();
      lottoBox.push(new Lotto(lotto).numbers);
    });

    return lottoBox;
  }
}

export default Counter;
