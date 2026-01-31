async function submitForm({
                            api,
                            payload,
                            successMessage,
                            redirect
                          }) {
  try {
    toast.info('Отправка данных...');
    const res = await apiFetch(api, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error(res.status);

    toast.success(successMessage);
    setTimeout(() => location.href = redirect, 1000);

  } catch (e) {
    toast.error('Ошибка сохранения');
  }
}
