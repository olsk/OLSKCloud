<script>
export let StorageClient;

function SetupStorageWidget (inputData) {
	(new window.OLSKStorageWidget(StorageClient)).attach(inputData).backend(document.querySelector('.OLSKAppToolbarStorageButton'));
};
</script>

<div class="OLSKStorageWidget" use:SetupStorageWidget></div>

<style global src="./__compiled/OLSKStorageWidget.css"></style>
