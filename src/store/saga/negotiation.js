import { call, put, takeLatest } from 'redux-saga/effects';
import {
  loadBySale,
  loadByInterest,
  putApprovedByBuyer,
  putApprovedBySeller,
  deleteReprovedBySeller,
  deleteReprovedByBuyer,
  remove,
} from '../../services/negotiations';
import {
  REMOVE_NEGOTIATION,
  UPDATE_SALE_NEGOTIATIONS,
  UPDATE_INTEREST_NEGOTIATIONS,
  LOAD_NEGOTIATION_BY_SALE,
  LOAD_NEGOTIATION_BY_INTEREST,
  APPROVE_BY_SELLER,
  APPROVE_BY_BUYER,
  REPROVE_BY_SELLER,
  REPROVE_BY_BUYER,
  FAILED_NEGOTIATION,
  SUCCEEDED_SELLER_NEGOTIATION,
  SUCCEEDED_BUYER_NEGOTIATION, RESET_LOADING_DATA_PROPERTY,
} from '../../constants/ActionTypes';
import { errorNotification, notification } from '../../utils/notificationUtils';

function* loadNegotiationBySale(action) {
  try {
    const payload = yield call(loadBySale, action.data.username);

    if (payload) {
      yield put({
        type: UPDATE_SALE_NEGOTIATIONS,
        payload: payload.data,
      });
    }
  } catch (e) {
    yield put({ type: RESET_LOADING_DATA_PROPERTY });
    yield put(errorNotification('Ocorreu um erro ao buscar as negociações'));
  }
}

function* loadNegotiationByInterest(action) {
  try {
    const payload = yield call(loadByInterest, action.data.username);

    if (payload) {
      yield put({
        type: UPDATE_INTEREST_NEGOTIATIONS,
        payload: payload.data,
      });
    }
  } catch (e) {
    yield put({ type: RESET_LOADING_DATA_PROPERTY });
    yield put(errorNotification('Ocorreu um erro ao buscar as negociações'));
  }
}
function* approvedBySeller(action) {
  try {
    const payload = yield call(putApprovedBySeller, action.id);

    if (payload) {
      yield put({ type: SUCCEEDED_SELLER_NEGOTIATION, id: action.id });
      yield put(notification('Interesse aprovado!'));
    }
  } catch (e) {
    yield put({ type: FAILED_NEGOTIATION });
    yield put(errorNotification('Ocorreu um erro ao salvar negociação'));
  }
}

function* approvedByBuyer(action) {
  try {
    const payload = yield call(putApprovedByBuyer, action.id);

    if (payload) {
      yield put({ type: SUCCEEDED_BUYER_NEGOTIATION, id: action.id });
      yield put(notification('Imóvel aprovado!'));
    }
  } catch (e) {
    yield put({ type: FAILED_NEGOTIATION });
    yield put(errorNotification('Ocorreu um erro ao salvar negociação'));
  }
}

function* reprovedBySeller(action) {
  try {
    const payload = yield call(deleteReprovedBySeller, action.id);

    if (payload) {
      yield put({ type: SUCCEEDED_SELLER_NEGOTIATION, id: action.id });
      yield put(notification('Interesse reprovado'));
    }
  } catch (e) {
    yield put({ type: FAILED_NEGOTIATION });
    yield put(errorNotification('Ocorreu um erro ao salvar negociação'));
  }
}

function* reprovedByBuyer(action) {
  try {
    const payload = yield call(deleteReprovedByBuyer, action.id);

    if (payload) {
      yield put({ type: SUCCEEDED_BUYER_NEGOTIATION, id: action.id });
      yield put(notification('Imóvel reprovado'));
    }
  } catch (e) {
    yield put({ type: FAILED_NEGOTIATION });
    yield put(errorNotification('Ocorreu um erro ao salvar negociação'));
  }
}

function* removeNegotiation(action) {
  try {
    yield call(remove, action.negotiationId);

  } catch (e) {
    yield put({ type: FAILED_NEGOTIATION });
    yield put(errorNotification('Ocorreu um erro ao remover negociação'));
  }
}

function* mySaga() {
  yield takeLatest(LOAD_NEGOTIATION_BY_SALE, loadNegotiationBySale);
  yield takeLatest(LOAD_NEGOTIATION_BY_INTEREST, loadNegotiationByInterest);
  yield takeLatest(APPROVE_BY_SELLER, approvedBySeller);
  yield takeLatest(APPROVE_BY_BUYER, approvedByBuyer);
  yield takeLatest(REPROVE_BY_SELLER, reprovedBySeller);
  yield takeLatest(REPROVE_BY_BUYER, reprovedByBuyer);
  yield takeLatest(REMOVE_NEGOTIATION, removeNegotiation);
}

export default mySaga;
