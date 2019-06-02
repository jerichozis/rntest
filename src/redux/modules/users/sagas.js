import { takeEvery, put, call, select } from "redux-saga/effects";
import { LoremIpsum } from "lorem-ipsum";
import { fetchUsers, setUsers } from "./actions";
import { apiFetchUsers } from "./api";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

function* fetchUsersWorker() {
  const page = yield select(state => state.users.nextPage);
  const {
    data: { results }
  } = yield apiFetchUsers({ page });

  yield put(
    setUsers({
      users: results.map(el => ({
        ...el,
        description: lorem.generateSentences(25)
      }))
    })
  );
}

export default function* users() {
  yield takeEvery(fetchUsers, fetchUsersWorker);
}
